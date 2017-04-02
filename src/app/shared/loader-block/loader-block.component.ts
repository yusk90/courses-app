import { Component } from '@angular/core';

import { LoaderBlockService } from './loader-block.service';

@Component({
  selector: 'loader-block',
  styleUrls: [ './loader-block.scss' ],
  templateUrl: './loader-block.html'
})

export class LoaderBlockComponent {
  constructor(public loaderBlockService: LoaderBlockService) {}
}
