import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  pageTitle!: string;

  /**
   * Constructs a new HeaderComponent.
   * 
   * @param router - The router service used for navigation.
   * @param activatedRoute - The activated route service used for retrieving route information.
   */
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child?.firstChild) {
          child = child.firstChild;
        }
        // Retrieves the path property of the last element of the url array
        return child?.snapshot.url[child?.snapshot.url.length - 1]?.path;
      })
    ).subscribe((path: string | undefined) => {
      this.pageTitle = this.mapPathToTitle(path || ''); 
    });
  }

  mapPathToTitle(path: string): string {
    const titleMap: { [key: string]: string } = {
      points: 'My Points',
      'my-exercises': 'My Exercises',
    };
    return titleMap[path] || 'My Workouts';
  }
}
