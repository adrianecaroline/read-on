import { Header, Content } from "./MenuStyle";

export function Menu() {
  return (
    <Header>

<p>logo</p>
      <nav>
        <Content>
          <div className="search">
            <input type="text" />

            <button>Search</button>
          </div>

          <button>Read List</button>
          <button>About</button>
          <button className="out">Log out</button>
        </Content>
      </nav>
    </Header>
  );
}
