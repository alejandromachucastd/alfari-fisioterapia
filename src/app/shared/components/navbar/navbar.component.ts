import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnDestroy {
  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(false);

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 12);
  }

  ngOnDestroy(): void {
    this.setMenuScrollLock(false);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
    this.setMenuScrollLock(false);
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((value) => {
      const next = !value;
      this.setMenuScrollLock(next);
      return next;
    });
  }

  private setMenuScrollLock(isLocked: boolean): void {
    const overflow = isLocked ? 'hidden' : 'auto';

    this.document.body.style.overflow = overflow;
    this.document.documentElement.style.overflow = overflow;
  }
}
