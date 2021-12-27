import { CreateParticipationUseCase } from '../../../domain/useCases/create-participation';
import './index.css';

interface HeaderComponentProps {
  createParticipationUseCase: CreateParticipationUseCase
}

function HeaderComponent({ createParticipationUseCase }: HeaderComponentProps) {

  async function onSend(event: any) {
    try {
      event.preventDefault()
      const firstName = event.target[0].value
      const lastName = event.target[1].value
      const participation = event.target[2].value
      await createParticipationUseCase.create({
        firstName,
        lastName,
        participation
      })
    }
    catch (error) {

    }
  }

  return (
    <header className="header" onSubmit={event => onSend(event)}>
      <form>
        <input className="input" placeholder="First name" name="firstName" id="firstName" />
        <input className="input" placeholder="Last name" name="lastName" id="lastName" />
        <input className="input" placeholder="Participation" name="participation" id="participation" />
        <input type="submit" className="button" value="SEND" />
      </form>
    </header>
  );
}

export { HeaderComponent };
