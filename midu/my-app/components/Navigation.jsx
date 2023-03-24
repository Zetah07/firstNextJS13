import Link from "next/link";


const links = [{
    label: "Home",
    route: "/"
    },
    {
    label: "About",
    route: "/about"
    },
    {
      label: "Posts",
      route: "/posts"
    },
    ];

    export function Navigation() {
    return (
        <header className="border rounded-md py-1">
          <nav>
            <ul className="flex items-center justify-between content-center px-6">
              {links.map(({ label, route }) => (
                <li key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        );
    }