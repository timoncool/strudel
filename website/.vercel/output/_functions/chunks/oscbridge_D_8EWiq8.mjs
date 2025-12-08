import { c8 as Pattern, cd as ClockCollator } from './MiniRepl_Ntj7iAxy.mjs';
import { parseControlsFromHap } from './osc_VQRXX9c6.mjs';
import { I as Invoke } from './utils_2Z4V5hbr.mjs';

const collator = new ClockCollator({});

async function oscTriggerTauri(hap, currentTime, cps = 1, targetTime) {
  const controls = parseControlsFromHap(hap, cps);
  const params = [];
  const timestamp = collator.calculateTimestamp(currentTime, targetTime);

  Object.keys(controls).forEach((key) => {
    const val = controls[key];
    const value = typeof val === 'number' ? val.toString() : val;

    if (value == null) {
      return;
    }
    params.push({
      name: key,
      value,
      valueisnumber: typeof val === 'number',
    });
  });

  if (params.length === 0) {
    return;
  }
  const message = { target: '/dirt/play', timestamp, params };
  setTimeout(() => {
    Invoke('sendosc', { messagesfromjs: [message] });
  });
}
Pattern.prototype.osc = function () {
  return this.onTrigger(oscTriggerTauri);
};

export { oscTriggerTauri };
