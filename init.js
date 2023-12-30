import readline from 'readline'
import fs from 'fs'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  {
    text: 'Provide your profile picture link: ',
    key: 'PROFILE_PICTURE'
  },
  {
    text: 'Provide your name: ',
    key: 'NAME'
  },
  {
    text: 'Provide your email: ',
    key: 'EMAIL'
  },
  {
    text: 'Provide your phone: ',
    key: 'PHONE'
  },
  {
    text: 'Provide your brief: ',
    key: 'BRIEF'
  },
  {
    text: 'Provide your resume link: ',
    key: 'RESUME'
  },
  {
    text: 'Provide your local time zone: ',
    key: 'LOCAL_TIME_ZONE'
  },
  {
    text: 'Provide your city picture link: ',
    key: 'CITY_PICTURE'
  },
  {
    text: 'Provide your city: ',
    key: 'CITY'
  },
  {
    text: 'Provide your country: ',
    key: 'COUNTRY'
  },
  {
    text: 'Provide your expirience: ',
    key: 'EXPIRIENCE'
  },
  {
    text: 'Provide your total projects: ',
    key: 'TOTAL_PROJECTS'
  },
  {
    text: 'Provide your github link: ',
    key: 'LINKS.GITHUB'
  },
  {
    text: 'Provide your twitter link: ',
    key: 'LINKS.TWITTER'
  },
  {
    text: 'Provide your linkedin link: ',
    key: 'LINKS.LINKEDIN'
  },
  {

    text: 'Provide your koderlabs link: ',
    key: 'LINKS.KODERLABS'
  },
  {
    text: 'Provide your skills: ',
    key: 'SKILLS',
    type: 'array'
  },
]

let projects = [];

function askForProject() {
  rl.question('Enter project title (or type "exit" to finish): ', (title) => {
    if (title.toLowerCase() === 'exit') {
      generateFile();
      return;
    }

    rl.question('Enter project category: ', (category) => {
      rl.question('Enter project link: ', (link) => {
        rl.question('Enter project date: ', (date) => {
          projects.push({ title, category, link, date });
          askForProject();
        });
      });
    });
  });
}

function generateFile() {
  const content = `export const PROJECTS = ${JSON.stringify(projects, null, 4)};`;

  fs.writeFile('src/config/constants/projects.js', content, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      return;
    }
    console.log('File has been created successfully.');
    rl.close();
  });
}

let answers = {};

function askQuestion(index) {
  if (index === questions.length) {
    saveAnswers();
    askForProject()
    return;
  }

  rl.question(questions[index].text, (answer) => {
    if (questions[index].key.includes('.')) {
      const keys = questions[index].key.split('.');
      answers[keys[0]] = {
        ...answers[keys[0]],
        [keys[1]]: answer
      }
    }
    else if (questions[index].type === 'array') {
      answers[questions[index].key] = answer.replace(/\s/g, '').split(',');
    }
    else {
      answers[questions[index].key] = answer;
    }
    askQuestion(index + 1);
  });
}

function saveAnswers(closeOnExec = false) {
  fs.writeFile('src/config/constants/info.js', `export const USER_INFO = ${JSON.stringify(answers, null, 2)};`, (err) => {
    if (err) throw err;
    if (closeOnExec) {
      rl.close();
    }
  });
}

askQuestion(0)

