class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`[data-value="days"]`),
      hours: document.querySelector(`[data-value="hours"]`),
      mins: document.querySelector(`[data-value="mins"]`),
      secs: document.querySelector(`[data-value="secs"]`),
    };
  }
  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      this.updateClockHtml(deltaTime);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
  }
  updateClockHtml(time) {
    if (time <= 0) {
      this.stop();
      return;
    }
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),);
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('17 Jul 2023'),
});

timer.start();
