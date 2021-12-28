import { useContext } from 'react';
import { toast } from 'react-toastify';
import { CreateParticipationUseCase } from '../../../domain/useCases/create-participation';
import { ParticipationContext } from '../../contexts/participations';
import './index.css';

interface HeaderComponentProps {
  createParticipationUseCase: CreateParticipationUseCase
}

function HeaderComponent({ createParticipationUseCase }: HeaderComponentProps) {

  const { participations, setParticipations } = useContext(ParticipationContext)


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

      toast.success('Participation sent', {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setParticipations([...participations,
      {
        firstName,
        lastName,
        participation,
        id: participations.length + 1
      }])
    }
    catch (error: any) {

      toast.warn(error.message, {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

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
