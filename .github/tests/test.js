const https = require('https');
const cheerio = require('cheerio');
const requiredElements = require('./testData');

<<<<<<< HEAD
const url = `https://${process.env.GITHUB_ACTOR}.github.io/15-may-23-${process.env.GITHUB_ACTOR}`;
=======
const url = `https://${process.env.GITHUB_ACTOR}.github.io`;
>>>>>>> main


function testElements($) {
  let testCasesPassed = 0;
  requiredElements.forEach((element) => {
    if (element.test($)) {
      testCasesPassed++;
    }
  });

  process.env.TEST_CASES_PASSED = testCasesPassed;
  console.log(`${testCasesPassed}`);
}

function testPage() {
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      const $ = cheerio.load(data);
      testElements($);
    });
  }).on('error', (err) => {
    console.error(`Error: ${err.message}`);
  });
}

testPage();