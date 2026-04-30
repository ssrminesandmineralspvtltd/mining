const QRCode = require('qrcode');
const path = require('path');

const url = 'https://mining-olive.vercel.app/#footer';
const outputPath = path.join(__dirname, 'business_card_qr_anchor.png');

QRCode.toFile(outputPath, url, {
  color: {
    dark: '#000000',  // Black dots
    light: '#FFFFFF' // White background
  },
  width: 1000, // High resolution for printing
  margin: 4    // Quiet zone
}, function (err) {
  if (err) throw err;
  console.log('Anchor QR code generated at ' + outputPath);
});
