import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shorten' })
export class ShortenPipe implements PipeTransform {
  static readonly MAX_TITLE_LENGTH = 30;

  transform(value: string): string {
    if (value == null) {
      return '';
    }

    if (value.length <= ShortenPipe.MAX_TITLE_LENGTH) {
      return value;
    }

    return value.substring(0, ShortenPipe.MAX_TITLE_LENGTH) + '...';
  }
}