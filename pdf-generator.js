/**
 * ASIS Boats Quotation System V11 - PDF Generator Module
 * Handles PDF and CSV export functionality
 */

import { BOATS, SALESMEN } from './data.js';
import { state, fmtPrice, getDeliveryTimeline } from './ui.js';

/**
 * Generate and download PDF quotation
 */
export function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const boat = BOATS[state.boatType].sizes[state.sizeIdx];
    const salesmanKey = document.getElementById('salesman').value;
    const salesmanInfo = salesmanKey ? SALESMEN[salesmanKey] : null;
    const tender = document.getElementById('tenderNum').value;
    const hideSubPrices = document.getElementById('hideSubPrices').checked;
    
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
    
    // Header
    doc.setFillColor(15, 40, 71);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('ASIS BOATS LLC', 105, 20, {align: 'center'});
    doc.setFontSize(12);
    doc.setTextColor(201, 162, 39);
    doc.text('PROFESSIONAL QUOTATION', 105, 30, {align: 'center'});
    
    // Quote info
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    let y = 50;
    
    doc.setFont(undefined, 'bold');
    doc.text('Quote Details:', 15, y);
    doc.setFont(undefined, 'normal');
    y += 7;
    doc.text(`Quote #: ${document.getElementById('quoteNum').value}`, 15, y);
    y += 5;
    doc.text(`Date: ${document.getElementById('quoteDate').value}`, 15, y);
    y += 5;
    doc.text(`Validity: ${document.getElementById('validity').value}`, 15, y);
    y += 5;
    doc.text(`Payment: ${document.getElementById('payTerms').value}`, 15, y);
    y += 5;
    doc.text(`Delivery Terms: ${document.getElementById('deliveryTerms').value}`, 15, y);
    y += 5;
    doc.text(`Delivery Timeline: ${getDeliveryTimeline()}`, 15, y);
    if (salesmanInfo) {
        y += 7;
        doc.setFont(undefined, 'bold');
        doc.text(`Salesman: ${salesmanInfo.name}`, 15, y);
        doc.setFont(undefined, 'normal');
        y += 5;
        doc.text(`${salesmanInfo.email}`, 15, y);
        y += 5;
        doc.text(`${salesmanInfo.phone}`, 15, y);
    }
    
    // Customer info
    y = 50;
    doc.setFont(undefined, 'bold');
    doc.text('Customer:', 110, y);
    doc.setFont(undefined, 'normal');
    y += 7;
    doc.text(document.getElementById('custCompany').value || '-', 110, y);
    y += 5;
    doc.text(document.getElementById('custName').value || '-', 110, y);
    y += 5;
    doc.text(document.getElementById('custEmail').value || '-', 110, y);
    y += 5;
    doc.text(document.getElementById('custPhone').value || '-', 110, y);
    if (tender) {
        y += 5;
        doc.text(`Tender: ${tender}`, 110, y);
    }
    
    // Items table
    y = 115;
    doc.setFillColor(15, 40, 71);
    doc.rect(15, y, 180, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.text('Description', 17, y + 5.5);
    doc.text('Qty', 130, y + 5.5);
    if (!hideSubPrices) {
        doc.text('Unit Price', 150, y + 5.5);
        doc.text('Total', 180, y + 5.5);
    }
    
    y += 10;
    doc.setTextColor(0, 0, 0);
    
    // Boat
    doc.text(`${BOATS[state.boatType].name} - ${boat.size}`, 17, y + 4);
    doc.text('1', 130, y + 4);
    if (!hideSubPrices) {
        doc.text(fmtPrice(boat.price), 150, y + 4);
        doc.text(fmtPrice(boat.price), 175, y + 4);
    }
    y += 8;
    
    // Options
    Object.entries(state.items).forEach(([cat, items]) => {
        Object.values(items).forEach(item => {
            if (item.name && y < 260) {
                const name = item.name.length > 55 ? item.name.substring(0, 52) + '...' : item.name;
                doc.text(name, 17, y + 4);
                doc.text(item.qty.toString(), 130, y + 4);
                if (!hideSubPrices) {
                    const unitPrice = item.isTBD ? 'TBD' : fmtPrice(item.price);
                    const itemTotal = item.isTBD ? 'TBD' : fmtPrice(item.price * item.qty);
                    doc.text(unitPrice, 150, y + 4);
                    doc.text(itemTotal, 175, y + 4);
                }
                y += 7;
            }
        });
    });
    
    // Totals
    y += 5;
    doc.line(15, y, 195, y);
    y += 7;
    
    if (!hideSubPrices) {
        doc.text(`Subtotal: ${fmtPrice(subtotal)}`, 150, y);
        if (discountPct > 0) {
            y += 6;
            doc.text(`Discount (${discountPct}%): -${fmtPrice(discount)}`, 150, y);
        }
        y += 8;
    } else {
        if (discountPct > 0) {
            doc.text(`Discount: ${discountPct}%`, 150, y);
            y += 8;
        }
    }
    
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text(`TOTAL: ${fmtPrice(total)}`, 150, y);
    
    // Notes
    const notes = document.getElementById('quoteNotes').value;
    if (notes && y < 250) {
        y += 15;
        doc.setFontSize(10);
        doc.setFont(undefined, 'bold');
        doc.text('Notes:', 15, y);
        doc.setFont(undefined, 'normal');
        y += 6;
        const splitNotes = doc.splitTextToSize(notes, 170);
        doc.text(splitNotes, 15, y);
    }
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text('ASIS Boats L.L.C, Jebel Ali Industrial Area 2, Dubai, UAE | Tel: +971 880 4441 | www.asisboats.com', 105, 290, {align: 'center'});
    
    doc.save(`${document.getElementById('quoteNum').value}.pdf`);
}

/**
 * Generate and download CSV export
 */
export function downloadCSV() {
    const boat = BOATS[state.boatType].sizes[state.sizeIdx];
    const salesman = document.getElementById('salesman').value;
    
    let csv = 'Description,Quantity,Unit Price,Total\n';
    csv += `"${BOATS[state.boatType].name} - ${boat.size}",1,${boat.price},${boat.price}\n`;
    
    Object.entries(state.items).forEach(([cat, items]) => {
        Object.values(items).forEach(item => {
            if (item.name) {
                const total = item.isTBD ? 'TBD' : item.price * item.qty;
                const price = item.isTBD ? 'TBD' : item.price;
                csv += `"${item.name}",${item.qty},${price},${total}\n`;
            }
        });
    });
    
    csv += `\nQuote #,${document.getElementById('quoteNum').value}\n`;
    csv += `Date,${document.getElementById('quoteDate').value}\n`;
    csv += `Salesman,${salesman}\n`;
    csv += `Customer,${document.getElementById('custCompany').value}\n`;
    
    const blob = new Blob([csv], {type: 'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${document.getElementById('quoteNum').value}.csv`;
    a.click();
}
