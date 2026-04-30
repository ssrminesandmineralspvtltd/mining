const QRCode = require('qrcode');
const path = require('path');

const url = 'https://ssrminesandminerals.com';
const outputPath = path.join(__dirname, 'business_card_qr.png');

QRCode.toFile(outputPath, url, {
  color: {
    dark: '#000000',  // Black dots
    light: '#FFFFFF' // White background
  },
  width: 1000, // High resolution for printing
  margin: 4    // Quiet zone
}, function (err) {
  if (err) throw err;
  console.log('QR code generated at ' + outputPath);
});
