"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { mainNav, services, supportNav, clinic } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/dental-services") {
    return (
      pathname === href || services.some((service) => pathname === `/${service.slug}`)
    );
  }
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <div className="bg-pine-deep text-cream">
        <div className="shell flex h-10 items-center justify-between gap-4 text-[0.66rem] font-semibold uppercase tracking-[0.16em]">
          <Link
            href={clinic.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-0 items-center gap-2 text-cream/80 transition-colors hover:text-cream"
          >
            <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">
              {clinic.address.line1} · {clinic.address.city}, {clinic.address.state}
            </span>
          </Link>
          <div className="flex items-center gap-5">
            <a
              href={clinic.phoneHref}
              className="hidden items-center gap-2 text-cream/80 transition-colors hover:text-cream sm:inline-flex"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {clinic.phone}
            </a>
            <a
              href={clinic.emailHref}
              className="hidden items-center gap-2 text-cream/80 transition-colors hover:text-cream md:inline-flex"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              Email us
            </a>
            <span className="hidden items-center gap-2 text-cream/55 lg:inline-flex">
              <Clock3 className="size-3.5" aria-hidden="true" />
              Mon–Thu · 7–5
            </span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "sticky top-0 z-50 border-b bg-bone/85 backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "border-line/80 shadow-[0_16px_48px_-34px_rgba(8,36,33,.7)]"
            : "border-transparent",
        )}
      >
        <div className="shell flex h-[5.2rem] items-center justify-between gap-6">
          <Logo priority />

          <NavigationMenu.Root
            className="relative hidden lg:block"
            delayDuration={80}
          >
            <NavigationMenu.List className="flex items-center gap-8">
              {mainNav.map((item) =>
                item.hasMenu ? (
                  <NavigationMenu.Item key={item.href} className="relative">
                    <NavigationMenu.Trigger
                      className={cn(
                        "nav-link group bg-transparent",
                        isActivePath(pathname, item.href) && "text-clay",
                      )}
                      data-active={isActivePath(pathname, item.href)}
                    >
                      {item.label}
                      <ChevronDown
                        className="size-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180"
                        aria-hidden="true"
                      />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="absolute left-0 top-full z-50 mt-4 w-[29rem] rounded-[1.4rem] border border-line bg-paper p-2 shadow-[0_28px_80px_-40px_rgba(8,36,33,.75)] data-[state=open]:animate-[pop-in_.28s_var(--ease-out-soft)]">
                      <div className="grid grid-cols-2 gap-1">
                        {services.map((service) => (
                          <NavigationMenu.Link key={service.slug} asChild>
                            <Link
                              href={`/${service.slug}`}
                              className="group flex flex-col gap-1 rounded-2xl px-4 py-3.5 transition-colors hover:bg-bone"
                            >
                              <span className="flex items-center justify-between gap-2 font-display text-[1.05rem] text-pine">
                                {service.name}
                                <ArrowUpRight className="size-3.5 text-clay opacity-0 transition-opacity group-hover:opacity-100" />
                              </span>
                              <span className="text-xs leading-5 text-muted">
                                {service.summary}
                              </span>
                            </Link>
                          </NavigationMenu.Link>
                        ))}
                      </div>
                      <NavigationMenu.Link asChild>
                        <Link
                          href="/dental-services"
                          className="mt-1 flex items-center justify-between rounded-2xl bg-pine px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-pine-deep"
                        >
                          All dental services
                          <ArrowUpRight className="size-4" aria-hidden="true" />
                        </Link>
                      </NavigationMenu.Link>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                ) : (
                  <NavigationMenu.Item key={item.href}>
                    <NavigationMenu.Link asChild>
                      <Link
                        href={item.href}
                        className={cn("nav-link", pathname === item.href && "text-clay")}
                        data-active={pathname === item.href}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                ),
              )}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          <div className="flex items-center gap-3">
            <a
              href={clinic.phoneHref}
              className="hidden items-center gap-2 text-sm font-bold tracking-tight text-pine transition-colors hover:text-clay xl:inline-flex"
            >
              <span className="grid size-9 place-items-center rounded-full border border-line bg-paper">
                <Phone className="size-3.5" aria-hidden="true" />
              </span>
              {clinic.phone}
            </a>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">
                Visit us
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>

            <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
              <Dialog.Trigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu aria-hidden="true" />
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[95] bg-pine-deep/35 backdrop-blur-sm data-[state=closed]:animate-[menu-out_.2s_ease-in] data-[state=open]:animate-[menu-in_.3s_ease-out]" />
                <Dialog.Content className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-bone px-5 pb-10 pt-5 focus:outline-none data-[state=closed]:animate-[menu-out_.22s_ease-in] data-[state=open]:animate-[menu-in_.35s_var(--ease-out-soft)] sm:px-8">
                  <Dialog.Title className="sr-only">Site menu</Dialog.Title>
                  <div className="flex items-center justify-between">
                    <Logo />
                    <Dialog.Close asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Close menu"
                      >
                        <X aria-hidden="true" />
                      </Button>
                    </Dialog.Close>
                  </div>

                  <nav className="mt-12" aria-label="Mobile navigation">
                    <ul className="space-y-1">
                      {mainNav.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="group flex items-baseline justify-between border-b border-line/70 py-3.5 font-display text-[2rem] leading-none text-pine transition-colors hover:text-clay"
                          >
                            {item.label}
                            <span className="text-[0.62rem] font-sans font-bold uppercase tracking-[0.18em] text-muted">
                              {item.label === "Home" ? "01" : ""}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 pl-0">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/${service.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="text-[0.78rem] font-semibold text-muted transition-colors hover:text-clay"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </nav>

                  <div className="mt-auto pt-12">
                    <div className="grid gap-3 border-t border-line pt-6">
                      {supportNav.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-pine"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-7 grid gap-3 text-sm text-muted">
                      <a
                        href={clinic.phoneHref}
                        className="flex items-center gap-3 font-semibold text-pine"
                      >
                        <Phone className="size-4" aria-hidden="true" />
                        {clinic.phone}
                      </a>
                      <a
                        href={clinic.emailHref}
                        className="flex items-center gap-3 break-all"
                      >
                        <Mail className="size-4 shrink-0" aria-hidden="true" />
                        {clinic.email}
                      </a>
                      <Link
                        href={clinic.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3"
                      >
                        <MapPin className="size-4 shrink-0" aria-hidden="true" />
                        {clinic.address.full}
                      </Link>
                    </div>
                    <Button asChild className="mt-7 w-full" size="lg">
                      <Link href="/contact" onClick={() => setMobileOpen(false)}>
                        Contact the clinic
                        <ArrowUpRight aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </header>
  );
}
