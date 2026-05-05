const google = require('googlethis');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const items = [
  { file: 'dr-green-cap.jpg', query: 'Dr. Green Surgical Cap' },
  { file: 'road-safety-sign.jpg', query: 'road safety sign board reflective' },
  { file: 'fire-blanket.jpg', query: 'red fire blanket in case' },
  { file: 'co2-extinguisher.jpg', query: 'CO2 fire extinguisher red' },
  { file: 'fire-hose-reel.jpg', query: 'fire hose reel red wall mounted' },
  { file: 'fire-alarm-system.jpg', query: 'fire alarm system panel' },
  { file: 'industrial-gumboots.jpg', query: 'black rubber industrial gumboots' },
  { file: 'dotted-gloves.jpg', query: 'cotton dotted work gloves' },
  { file: 'rubber-gloves.jpg', query: 'heavy duty black industrial rubber gloves' },
  { file: 'acid-gloves.jpg', query: 'green chemical resistant acid gloves' },
  { file: 'leather-gloves.jpg', query: 'chrome leather welding work gloves' },
  { file: 'kevlar-gloves.jpg', query: 'kevlar cut resistant gloves yellow' },
  { file: 'nitrile-gloves.jpg', query: 'blue disposable nitrile gloves box' },
  { file: 'heat-gloves.jpg', query: 'red heat resistant welding gloves' },
  { file: 'electrician-gloves.jpg', query: 'rubber electrician insulated gloves' },
  { file: 'sunline-goggles.jpg', query: 'clear industrial safety goggles' },
  { file: 'eye-wash.jpg', query: 'green eye wash bottle station' },
  { file: 'boiler-suit.jpg', query: 'industrial boiler suit coverall blue' },
  { file: 'full-body-harness.jpg', query: 'industrial full body safety harness' },
  { file: 'chemical-suit.jpg', query: 'yellow hazmat chemical suit' },
  { file: 'safety-barrier.jpg', query: 'expandable plastic traffic safety barrier' }
];

async function downloadImage(url, dest) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    
    return new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(dest);
      response.data.pipe(writer);
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    throw new Error(`Failed to download ${url}: ${error.message}`);
  }
}

async function run() {
  for (const item of items) {
    console.log(`Searching for: ${item.query}`);
    try {
      const images = await google.image(item.query, { safe: false });
      if (images && images.length > 0) {
        let success = false;
        // Try the first 3 images until one works
        for (let i = 0; i < Math.min(3, images.length); i++) {
          try {
            console.log(`  Downloading ${images[i].url}`);
            await downloadImage(images[i].url, path.join(__dirname, 'public/images/products', item.file));
            console.log(`  Success: ${item.file}`);
            success = true;
            break;
          } catch (e) {
            console.log(`  Failed, trying next...`);
          }
        }
        if (!success) {
          console.log(`  Could not download any image for ${item.query}`);
        }
      } else {
        console.log(`  No images found for ${item.query}`);
      }
    } catch (e) {
      console.log(`  Error searching: ${e.message}`);
    }
  }
}

run();
