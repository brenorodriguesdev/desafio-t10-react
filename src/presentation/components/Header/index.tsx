import './index.css';

function HeaderComponent() {
  return (
    <header className="header">
      <form>
        <input className="input" placeholder="First name" />
        <input className="input" placeholder="Last name" />
        <input className="input" placeholder="Participation" />
        <input type="submit" className="button" value="SEND" />
      </form>
    </header>
  );
}

export { HeaderComponent };
