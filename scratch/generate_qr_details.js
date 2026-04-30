const QRCode = require('qrcode');
const path = require('path');

const url = 'https://mining-olive.vercel.app/details';
const outputPath = path.join(__dirname, 'business_card_qr_details.png');

QRCode.toFile(outputPath, url, {
  color: {
    dark: '#000000',  // Black dots
    light: '#FFFFFF' // White background
  },
  width: 1000, // High resolution for printing
  margin: 4    // Quiet zone
}, function (err) {
  if (err) throw err;
  console.log('Details QR code generated at ' + outputPath);
});
