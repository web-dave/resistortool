import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {
  transform(v: string, multiplier: any): string | number {
    const value = parseInt(v, 10) * multiplier;
    console.log(v, multiplier, value);
    const SI_SYMBOL = ['', 'k', 'M'];
    // tslint:disable-next-line:no-bitwise
    const tier = (Math.log10(value) / 3) | 0;
    if (tier === 0) {
      return value;
    }
    const suffix = SI_SYMBOL[tier];
    return (value / Math.pow(10, tier * 3)).toFixed(1) + SI_SYMBOL[tier];
  }
}
