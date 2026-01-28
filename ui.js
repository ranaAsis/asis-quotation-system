// ==================== ASIS BOATS QUOTATION SYSTEM - UI MODULE ====================
// Contains state management, rendering functions, navigation, and item handling

import { BOATS, ACCESSORIES, CATEGORY_GROUPS, SALESMEN, RATES, setRates, ratesLoaded } from './data.js';

// ==================== STATE ====================
export let state = {
    boatType: null,
    sizeIdx: null,
    currency: 'USD',
    items: {}
};

let itemCounter = 0;

// ==================== CURRENCY RATES ====================
export async function fetchExchangeRates() {
    try {
        const res = await fetch('https://api.frankfurter.app/latest?from=USD&to=EUR');
        const data = await res.json();
        setRates({ EUR: data.rates.EUR }, true);
        updateRateInfo();
    } catch (e) {
        console.log('Using fallback EUR rate');
        updateRateInfo();
    }
}

export function updateRateInfo() {
    const el = document.getElementById('rateInfo');
    if (el) {
        el.innerHTML = `<small style="color:var(--gray-500);">Rates: AED 3.6725 (fixed) | EUR ${RATES.EUR.toFixed(4)} ${ratesLoaded ? '(live)' : '(fallback)'}</small>`;
    }
}

// ==================== INIT ====================
export function init() {
    document.getElementById('quoteDate').value = new Date().toISOString().split('T')[0];
    renderBoatTypes();
    updateRateInfo();
    fetchExchangeRates();
}

// Toggle custom delivery input
export function toggleDeliveryInput() {
    const select = document.getElementById('deliverySelect');
    const customInput = document.getElementById('deliveryCustom');
    if (select.value === 'custom') {
        customInput.style.display = 'block';
        customInput.focus();
    } else {
        customInput.style.display = 'none';
        customInput.value = '';
    }
}

// Get delivery timeline value
export function getDeliveryTimeline() {
    const select = document.getElementById('deliverySelect');
    if (select.value === 'custom') {
        return document.getElementById('deliveryCustom').value || 'TBD';
    }
    return select.value;
}

// ==================== UTILITIES ====================
export function fmt(n) { 
    return n.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0}); 
}

export function fmtPrice(n) {
    const converted = n * RATES[state.currency];
    const symbol = state.currency === 'EUR' ? '€' : state.currency === 'AED' ? 'AED ' : '$';
    return symbol + fmt(converted);
}

export function getSelectedSize() {
    if (state.boatType && state.sizeIdx !== null) {
        return BOATS[state.boatType].sizes[state.sizeIdx].size;
    }
    return null;
}

// ==================== BOAT SELECTION ====================
export function renderBoatTypes() {
    const grid = document.getElementById('boatTypesGrid');
    grid.innerHTML = '';
    Object.entries(BOATS).forEach(([key, boat]) => {
        const minPrice = Math.min(...boat.sizes.map(s => s.price));
        grid.innerHTML += `
            <div class="boat-type ${state.boatType === key ? 'selected' : ''}" onclick="selectBoatType('${key}')">
                <div class="boat-type-icon">${boat.icon}</div>
                <h3>${boat.name}</h3>
                <p>${boat.desc}</p>
                <div class="boat-type-stats">
                    <div class="stat"><div class="stat-val">${boat.sizes.length}</div><div class="stat-label">Sizes</div></div>
                    <div class="stat"><div class="stat-val">$${fmt(minPrice)}</div><div class="stat-label">From</div></div>
                </div>
            </div>`;
    });
}

export function renderBoatSizes() {
    const grid = document.getElementById('boatSizesGrid');
    const boat = BOATS[state.boatType];
    grid.innerHTML = '';
    boat.sizes.forEach((s, i) => {
        grid.innerHTML += `
            <div class="boat-size ${state.sizeIdx === i ? 'selected' : ''}" onclick="selectBoatSize(${i})">
                <div class="size">${s.size}</div>
                <div class="price">${fmtPrice(s.price)}</div>
                <div class="specs">Fuel: ${s.fuel} | ${s.pax} PAX</div>
            </div>`;
    });
}

export function selectBoatType(type) {
    state.boatType = type;
    state.sizeIdx = null;
    state.items = {};
    renderBoatTypes();
    document.getElementById('sizesCard').style.display = 'block';
    renderBoatSizes();
    document.getElementById('nextBtn1').disabled = true;
    updateTotals();
}

export function selectBoatSize(idx) {
    state.sizeIdx = idx;
    state.items = {}; // Reset items when size changes
    renderBoatSizes();
    document.getElementById('nextBtn1').disabled = false;
    updateTotals();
    // Auto-advance to step 2
    setTimeout(() => goTo(2), 300);
}

// ==================== CATEGORIES ====================
function buildCategoryHtml(cat, accessories, selectedSize, isFlat, group) {
    const items = accessories[cat];
    if (!items) return { html: '', hasItems: false };
    
    // Filter items available for this size
    const availableItems = items.filter(item => {
        const price = item.prices[selectedSize];
        return price !== 'X' && price !== undefined;
    });
    
    if (availableItems.length === 0) return { html: '', hasItems: false };
    
    const catId = cat.replace(/[^a-zA-Z0-9]/g, '');
    
    // For flat groups, use the group name as header; for seating subcats, remove "Seating - " prefix
    let displayName = cat;
    if (isFlat && group) {
        displayName = group.name;
    } else if (cat.startsWith('Seating - ')) {
        displayName = cat.replace('Seating - ', '');
    }
    
    const categoryClass = isFlat ? 'category flat-category' : 'category';
    
    const html = `
        <div class="${categoryClass}">
            <div class="cat-header" onclick="toggleCategory('${catId}')">
                <h3>${isFlat && group ? `<span style="margin-right:10px;font-size:20px;">${group.icon}</span>` : ''}${displayName} <span style="opacity:0.7;font-weight:400;font-size:11px;">(${availableItems.length} items)</span></h3>
                <div style="display:flex;align-items:center;gap:12px;">
                    <span class="cat-total" id="catTotal-${catId}">$0</span>
                    <span class="arrow">▼</span>
                </div>
            </div>
            <div class="cat-content" id="content-${catId}">
                <div class="cat-inner">
                    <div class="item-grid-header">
                        <span>Description</span>
                        <span>Qty</span>
                        <span>Unit Price</span>
                        <span class="right">Extended</span>
                        <span></span>
                    </div>
                    <div id="items-${catId}"></div>
                    <button class="add-btn" onclick="addItem('${cat}')">+ Add Item</button>
                </div>
            </div>
        </div>`;
    
    return { html, hasItems: true, cat };
}

export function buildCategories() {
    const container = document.getElementById('categoriesContainer');
    container.innerHTML = '';
    
    if (!state.boatType) return;
    
    const accessories = ACCESSORIES[state.boatType];
    const groups = CATEGORY_GROUPS[state.boatType];
    const selectedSize = getSelectedSize();
    
    document.getElementById('selectedBoatLabel').textContent = 
        `${BOATS[state.boatType].name} - ${selectedSize}`;
    
    // Track categories to auto-add first item
    const categoriesToInit = [];
    
    // Build each main group
    groups.forEach((group, groupIdx) => {
        let groupHtml = '';
        let groupHasItems = false;
        
        // Build regular categories within this group
        if (group.categories) {
            group.categories.forEach(cat => {
                const result = buildCategoryHtml(cat, accessories, selectedSize, group.flat, group);
                if (result.hasItems) {
                    groupHasItems = true;
                    categoriesToInit.push(result.cat);
                    if (group.flat) {
                        container.innerHTML += result.html;
                    } else {
                        groupHtml += result.html;
                    }
                }
            });
        }
        
        // Build subgroups (e.g., Seating containing Leaning Posts, Jockey, etc.)
        if (group.subgroups) {
            group.subgroups.forEach((subgroup, subgroupIdx) => {
                let subgroupHtml = '';
                let subgroupHasItems = false;
                
                subgroup.categories.forEach(cat => {
                    const result = buildCategoryHtml(cat, accessories, selectedSize, false, null);
                    if (result.hasItems) {
                        subgroupHasItems = true;
                        groupHasItems = true;
                        categoriesToInit.push(result.cat);
                        subgroupHtml += result.html;
                    }
                });
                
                if (subgroupHasItems) {
                    const subgroupId = `subgroup-${groupIdx}-${subgroupIdx}`;
                    groupHtml += `
                        <div class="subgroup">
                            <div class="subgroup-header" onclick="toggleSubgroup('${subgroupId}')">
                                <h4>${subgroup.name}</h4>
                                <div style="display:flex;align-items:center;">
                                    <span class="subgroup-total" id="subgroupTotal-${subgroupId}">$0</span>
                                    <span class="subgroup-arrow">▼</span>
                                </div>
                            </div>
                            <div class="subgroup-content" id="${subgroupId}">
                                <div class="subgroup-inner">
                                    ${subgroupHtml}
                                </div>
                            </div>
                        </div>`;
                }
            });
        }
        
        if (!groupHasItems) return;
        
        // For non-flat groups, wrap in main group container
        if (!group.flat && groupHtml) {
            const groupId = 'group-' + groupIdx;
            container.innerHTML += `
                <div class="main-group">
                    <div class="main-group-header" onclick="toggleMainGroup('${groupId}')">
                        <h2><span class="group-icon">${group.icon}</span> ${group.name}</h2>
                        <div style="display:flex;align-items:center;">
                            <span class="group-total" id="groupTotal-${groupIdx}">$0</span>
                            <span class="group-arrow">▼</span>
                        </div>
                    </div>
                    <div class="main-group-content" id="${groupId}">
                        <div class="main-group-inner">
                            ${groupHtml}
                        </div>
                    </div>
                </div>`;
        }
    });
    
    // Auto-add first item row to each category
    categoriesToInit.forEach(cat => {
        addItem(cat);
    });
}

export function toggleMainGroup(groupId) {
    const content = document.getElementById(groupId);
    const header = content.previousElementSibling;
    content.classList.toggle('open');
    header.classList.toggle('open');
}

export function toggleSubgroup(subgroupId) {
    const content = document.getElementById(subgroupId);
    const header = content.previousElementSibling;
    content.classList.toggle('open');
    header.classList.toggle('open');
}

export function toggleCategory(catId) {
    const content = document.getElementById('content-' + catId);
    const header = content.previousElementSibling;
    content.classList.toggle('open');
    header.classList.toggle('open');
}

// ==================== ITEM MANAGEMENT ====================
export function addItem(category) {
    const catId = category.replace(/[^a-zA-Z0-9]/g, '');
    const itemsDiv = document.getElementById('items-' + catId);
    const id = ++itemCounter;
    const selectedSize = getSelectedSize();
    const accessories = ACCESSORIES[state.boatType][category];
    
    // Build options - only show items available for this size
    let options = '<option value="">-- Select Item --</option>';
    accessories.forEach((item, i) => {
        const price = item.prices[selectedSize];
        if (price === 'X' || price === undefined) return; // Skip unavailable
        
        let priceDisplay;
        if (price === 'TBD') {
            priceDisplay = 'TBD';
        } else if (price === 'Incl.') {
            priceDisplay = 'Included';
        } else {
            priceDisplay = '$' + fmt(price);
        }
        options += `<option value="${i}">${item.name} - ${priceDisplay}</option>`;
    });
    options += '<option value="custom">+ Custom Item</option>';
    
    const row = document.createElement('div');
    row.className = 'item-row';
    row.id = 'row-' + id;
    row.innerHTML = `
        <select onchange="itemSelected(this, '${category}', ${id})">${options}</select>
        <input type="number" value="1" min="1" id="qty-${id}" onchange="updateItemQty(${id}, '${category}')">
        <input type="text" class="price-input" id="price-${id}" value="$0" onchange="updateItemPrice(${id}, '${category}')">
        <div class="extended" id="ext-${id}">$0</div>
        <button class="delete-btn" onclick="removeItem(${id}, '${category}')">×</button>
    `;
    itemsDiv.appendChild(row);
    
    if (!state.items[category]) state.items[category] = {};
    state.items[category][id] = {itemIdx: null, qty: 1, price: 0, name: '', isCustom: false, isTBD: false};
}

export function itemSelected(select, category, id) {
    const val = select.value;
    const priceInput = document.getElementById('price-' + id);
    const extDiv = document.getElementById('ext-' + id);
    const selectedSize = getSelectedSize();
    
    if (val === 'custom') {
        const parent = select.parentElement;
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'custom-input';
        input.placeholder = 'Enter custom item name...';
        input.id = 'name-' + id;
        input.onchange = () => updateCustomItem(id, category);
        parent.replaceChild(input, select);
        
        state.items[category][id].isCustom = true;
        state.items[category][id].itemIdx = -1;
        priceInput.value = '$0';
        priceInput.focus();
    } else if (val !== '') {
        const itemIdx = parseInt(val);
        const item = ACCESSORIES[state.boatType][category][itemIdx];
        const price = item.prices[selectedSize];
        
        state.items[category][id].itemIdx = itemIdx;
        state.items[category][id].name = item.name;
        
        if (price === 'TBD') {
            state.items[category][id].price = 0;
            state.items[category][id].isTBD = true;
            priceInput.value = 'TBD';
            priceInput.disabled = true;
            extDiv.innerHTML = '<span class="tbd">TBD</span>';
        } else if (price === 'Incl.') {
            state.items[category][id].price = 0;
            state.items[category][id].isTBD = false;
            priceInput.value = 'Included';
            priceInput.disabled = true;
            extDiv.textContent = 'Incl.';
        } else {
            state.items[category][id].price = price;
            state.items[category][id].isTBD = false;
            priceInput.value = '$' + fmt(price);
            priceInput.disabled = false;
        }
    } else {
        state.items[category][id].itemIdx = null;
        state.items[category][id].price = 0;
        state.items[category][id].name = '';
        state.items[category][id].isTBD = false;
        priceInput.value = '$0';
        priceInput.disabled = false;
    }
    
    updateItemExtended(id, category);
    updateCategoryTotal(category);
    updateTotals();
}

export function updateCustomItem(id, category) {
    const nameInput = document.getElementById('name-' + id);
    state.items[category][id].name = nameInput.value;
}

export function updateItemQty(id, category) {
    const qty = parseInt(document.getElementById('qty-' + id).value) || 1;
    state.items[category][id].qty = qty;
    updateItemExtended(id, category);
    updateCategoryTotal(category);
    updateTotals();
}

export function updateItemPrice(id, category) {
    const priceInput = document.getElementById('price-' + id);
    const price = parseFloat(priceInput.value.replace(/[^0-9.]/g, '')) || 0;
    state.items[category][id].price = price;
    priceInput.value = '$' + fmt(price);
    updateItemExtended(id, category);
    updateCategoryTotal(category);
    updateTotals();
}

function updateItemExtended(id, category) {
    const item = state.items[category][id];
    if (item.isTBD) {
        document.getElementById('ext-' + id).innerHTML = '<span class="tbd">TBD</span>';
    } else {
        const extended = item.price * item.qty;
        document.getElementById('ext-' + id).textContent = '$' + fmt(extended);
    }
}

export function removeItem(id, category) {
    document.getElementById('row-' + id).remove();
    delete state.items[category][id];
    updateCategoryTotal(category);
    updateTotals();
}

function updateCategoryTotal(category) {
    const catId = category.replace(/[^a-zA-Z0-9]/g, '');
    let total = 0;
    if (state.items[category]) {
        Object.values(state.items[category]).forEach(item => {
            if (item.price && item.qty && !item.isTBD) {
                total += item.price * item.qty;
            }
        });
    }
    const el = document.getElementById('catTotal-' + catId);
    if (el) el.textContent = '$' + fmt(total);
}

// ==================== TOTALS ====================
export function updateTotals() {
    const base = state.boatType && state.sizeIdx !== null ? BOATS[state.boatType].sizes[state.sizeIdx].price : 0;
    let options = 0;
    
    Object.values(state.items).forEach(cat => {
        Object.values(cat).forEach(item => {
            if (item.price && item.qty && !item.isTBD) {
                options += item.price * item.qty;
            }
        });
    });
    
    const subtotal = base + options;
    const discountPct = parseFloat(document.getElementById('discount')?.value) || 0;
    const discount = subtotal * (discountPct / 100);
    const total = subtotal - discount;
    
    // Update summaries
    document.getElementById('sumType').textContent = state.boatType ? BOATS[state.boatType].name : '-';
    document.getElementById('sumSize').textContent = state.sizeIdx !== null ? BOATS[state.boatType].sizes[state.sizeIdx].size : '-';
    document.getElementById('sumBase').textContent = base ? fmtPrice(base) : '-';
    document.getElementById('sumOptions').textContent = fmtPrice(options);
    document.getElementById('sumTotal').textContent = fmtPrice(total);
    
    const sumTotal2 = document.getElementById('sumTotal2');
    if (sumTotal2) sumTotal2.textContent = fmtPrice(total);
    
    const sumSub3 = document.getElementById('sumSub3');
    if (sumSub3) sumSub3.textContent = fmtPrice(subtotal);
    const sumDisc3 = document.getElementById('sumDisc3');
    if (sumDisc3) sumDisc3.textContent = '-' + fmtPrice(discount);
    const sumTotal3 = document.getElementById('sumTotal3');
    if (sumTotal3) sumTotal3.textContent = fmtPrice(total);
    
    // Update selected items list
    updateSelectedItemsList();
}

function updateSelectedItemsList() {
    const list = document.getElementById('selectedItemsList');
    if (!list) return;
    
    let html = '';
    if (state.boatType && state.sizeIdx !== null) {
        html += `<div class="sel-item"><span class="name">${BOATS[state.boatType].sizes[state.sizeIdx].size} ${BOATS[state.boatType].name}</span><span class="amt">${fmtPrice(BOATS[state.boatType].sizes[state.sizeIdx].price)}</span></div>`;
    }
    
    Object.entries(state.items).forEach(([cat, items]) => {
        Object.values(items).forEach(item => {
            if (item.name) {
                const amt = item.isTBD ? 'TBD' : fmtPrice(item.price * item.qty);
                html += `<div class="sel-item"><span class="name">${item.qty}x ${item.name}</span><span class="amt">${amt}</span></div>`;
            }
        });
    });
    
    list.innerHTML = html || '<div style="color:var(--gray-500);font-size:12px;">No items selected</div>';
}

// ==================== CURRENCY ====================
export function setCurrency(curr) {
    state.currency = curr;
    document.querySelectorAll('.curr-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`.curr-btn`).forEach(b => {
        if (b.textContent === curr) b.classList.add('active');
    });
    if (state.boatType) renderBoatSizes();
    updateTotals();
}

// ==================== NAVIGATION ====================
export function goTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + page).classList.add('active');
    
    document.querySelectorAll('.step').forEach((s, i) => {
        s.classList.remove('active', 'done');
        if (i + 1 < page) s.classList.add('done');
        if (i + 1 === page) s.classList.add('active');
    });
    
    if (page === 2) {
        buildCategories();
    }
    if (page === 3) {
        // Set default quotation title based on boat type and size
        const titleField = document.getElementById('quoteTitle');
        if (!titleField.value) {
            const size = getSelectedSize();
            const boatType = state.boatType;
            let typeName = '';
            if (boatType === 'aluminum') typeName = 'Aluminum RIB Boats';
            else if (boatType === 'fiberglass') typeName = 'Fiberglass RIB Boats';
            else if (boatType === 'inflatable') typeName = 'Inflatable Boats';
            titleField.value = `${size} ${typeName}`;
        }
    }
    if (page === 4) {
        buildPreview();
    }
    
    window.scrollTo(0, 0);
}

// ==================== PREVIEW ====================
export function buildPreview() {
    const boat = BOATS[state.boatType].sizes[state.sizeIdx];
    const salesmanKey = document.getElementById('salesman').value;
    const salesmanInfo = salesmanKey ? SALESMEN[salesmanKey] : null;
    const tender = document.getElementById('tenderNum').value;
    const hideSubPrices = document.getElementById('hideSubPrices').checked;
    const quoteTitle = document.getElementById('quoteTitle').value;
    
    // Set quotation title in preview
    document.getElementById('prevQuoteTitle').textContent = quoteTitle;
    
    // Quote info with salesman details
    let salesmanHtml = '';
    if (salesmanInfo) {
        salesmanHtml = `
            Salesman: ${salesmanInfo.name}<br>
            ✉ ${salesmanInfo.email}<br>
            ☎ ${salesmanInfo.phone}<br>
        `;
    }
    
    document.getElementById('prevQuoteInfo').innerHTML = `
        Quote #: ${document.getElementById('quoteNum').value}<br>
        Date: ${document.getElementById('quoteDate').value}<br>
        Validity: ${document.getElementById('validity').value}<br>
        ${salesmanHtml}
        Payment: ${document.getElementById('payTerms').value}<br>
        Delivery Terms: ${document.getElementById('deliveryTerms').value}<br>
        Delivery Timeline: ${getDeliveryTimeline()}
    `;
    
    document.getElementById('prevCustInfo').innerHTML = `
        ${document.getElementById('custCompany').value || '-'}<br>
        ${document.getElementById('custName').value || '-'}<br>
        ${document.getElementById('custEmail').value || '-'}<br>
        ${document.getElementById('custPhone').value || '-'}<br>
        ${tender ? 'Tender: ' + tender + '<br>' : ''}
        ${document.getElementById('custAddr').value || ''}
    `;
    
    // Calculate totals first
    let options = 0;
    Object.values(state.items).forEach(cat => {
        Object.values(cat).forEach(item => {
            if (item.price && item.qty && !item.isTBD) {
                options += item.price * item.qty;
            }
        });
    });
    
    const subtotal = boat.price + options;
    const discountPct = parseFloat(document.getElementById('discount').value) || 0;
    const discount = subtotal * (discountPct / 100);
    const total = subtotal - discount;
    
    // Items table
    let itemsHtml = '';
    if (hideSubPrices) {
        // Show items but hide individual prices - only show total at the end
        itemsHtml = `<tr><td><strong>${BOATS[state.boatType].name} - ${boat.size}</strong></td><td>1</td><td class="right">-</td><td class="right">-</td></tr>`;
        
        Object.entries(state.items).forEach(([cat, items]) => {
            Object.values(items).forEach(item => {
                if (item.name) {
                    itemsHtml += `<tr><td>${item.name}</td><td>${item.qty}</td><td class="right">-</td><td class="right">-</td></tr>`;
                }
            });
        });
    } else {
        // Show full details with prices
        itemsHtml = `<tr><td><strong>${BOATS[state.boatType].name} - ${boat.size}</strong></td><td>1</td><td class="right">${fmtPrice(boat.price)}</td><td class="right">${fmtPrice(boat.price)}</td></tr>`;
        
        Object.entries(state.items).forEach(([cat, items]) => {
            Object.values(items).forEach(item => {
                if (item.name) {
                    const unitPrice = item.isTBD ? 'TBD' : fmtPrice(item.price);
                    const itemTotal = item.isTBD ? 'TBD' : fmtPrice(item.price * item.qty);
                    itemsHtml += `<tr><td>${item.name}</td><td>${item.qty}</td><td class="right">${unitPrice}</td><td class="right">${itemTotal}</td></tr>`;
                }
            });
        });
    }
    
    document.getElementById('prevItems').innerHTML = itemsHtml;
    
    // Totals
    if (hideSubPrices) {
        document.getElementById('prevTotals').innerHTML = `
            ${discountPct > 0 ? `<div>Discount: ${discountPct}%</div>` : ''}
            <div class="grand">TOTAL: ${fmtPrice(total)}</div>
        `;
    } else {
        document.getElementById('prevTotals').innerHTML = `
            <div>Subtotal: ${fmtPrice(subtotal)}</div>
            ${discountPct > 0 ? `<div>Discount (${discountPct}%): -${fmtPrice(discount)}</div>` : ''}
            <div class="grand">TOTAL: ${fmtPrice(total)}</div>
        `;
    }
    
    // Notes
    const notes = document.getElementById('quoteNotes').value;
    if (notes) {
        document.getElementById('prevNotes').style.display = 'block';
        document.getElementById('prevNotesText').textContent = notes;
    } else {
        document.getElementById('prevNotes').style.display = 'none';
    }
}
