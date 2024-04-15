import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerTitle: string = 'My Workouts';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child?.firstChild) {
          child = child.firstChild;
        }
        return child?.snapshot.url[child?.snapshot.url.length - 1]?.path;
      })
    ).subscribe((path: string | undefined) => {
      this.updateFooterTitle(this.mapPathToTitle(path || ''));
    });
  }

  mapPathToTitle(path: string): string {
    const titleMap: { [key: string]: string } = {
      'my-exercises': 'My Exercises',
      // Add more mappings for other routes if needed
    };
    return titleMap[path] || 'My Workouts';
  }

  updateFooterTitle(title: string): void {
    this.footerTitle = title;
  }
}
