class Developer {
  language: string;
  protected hate: string;

  constructor(public name: string, lang = 'TS') {
    this.language = lang;
  }

  develop() {
    console.log('debug debug debug');
  }

  get cv() {
    return `${this.name}: ${this.language}`;
  }

  static blameQA() {
    console.log('AAAAAARRRRRGH!!!!! IT WORKED ON MY MACBOOK!!!!!');
  }
}

class TechLead extends Developer {
   
  constructor(name: string, readonly team: string) {
    super(name);
  }

  lead() {
    console.log('I want to write some code');
  }

  get cv() {
    return `${this.name}: ${this.team}`;
  }
}