import { Component } from '@angular/core';
export class joke
{
    setup: string;
    punchline: string;
    hide: boolean;
    public constructor(setup: string, punchline: string)
    {
        this.setup=setup;
        this.punchline=punchline;
        this.hide=true;
    }
    toggle() {
        this.hide = !this.hide;
      }
}