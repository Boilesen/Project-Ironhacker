class Player {
  constructor() {
    this.stressHTMLNode = document.getElementById("stress");
    this.healthHTMLNode = document.getElementById("health");
    this.socialHTMLNode = document.getElementById("social");
    this.studyHTMLNode = document.getElementById("study");
    this.stress = 50;
    this.health = 50;
    this.social = 50;
    this.study = 50;
  }

  updatePlayer(effect) {
    this.stress = Math.min(Math.max(this.stress + effect[0], 0), 100);
    this.health = Math.min(Math.max(this.health + effect[1], 0), 100);
    this.social = Math.min(Math.max(this.social + effect[2], 0), 100);
    this.study = Math.min(Math.max(this.study + effect[3], 0), 100);
  }

  printCurrentStatus() {
    this.stressHTMLNode.innerText = `Stress: ${this.stress}`;
    this.healthHTMLNode.innerText = `Health: ${this.health}`;
    this.socialHTMLNode.innerText = `Social: ${this.social}`;
    this.studyHTMLNode.innerText = `Study: ${this.study}`;
  }

  isPlayerOver() {
    const status = [this.stress, this.health, this.social, this.study];
    return [status.indexOf(0), status.indexOf(100)];
  }
}
