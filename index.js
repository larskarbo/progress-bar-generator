const cliProgress = require('cli-progress');
const args = require('args');

args
.option('progress', 'Progress', 3000)
.option('total', 'Total')

const flags = args.parse(process.argv)

console.log('flags: ', flags);
// create a new progress bar instance and use shades_classic theme
const bar1 = new cliProgress.SingleBar({
  format: '' +'{bar}' + ' {percentage}% | {value}/{total}',
    
}, cliProgress.Presets.shades_classic);
 
// start the progress bar with a total value of 200 and start value of 0
bar1.start(flags.total, 0);
 
// update the current value in your application..
bar1.update(flags.progress);
 
// stop the progress bar
bar1.stop();