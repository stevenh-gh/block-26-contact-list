import { useEffect, useState } from "react"
import ContactRow from "./ContactRow";

export default function SelectedContact({selectedContactId, setSelectedContactId})
{
	const [contact, setContact] = useState({});

	useEffect(() =>
	{
		async function fetchSelectedContacts()
		{
			try
			{
				const res = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
				const data = await res.json();
				setContact(data);
			}
			catch(error)
			{
				console.log(error);
			}
		}

		fetchSelectedContacts();
	}, []);

	return (
		<>
			<table>
				<tbody>
					<ContactRow contact={contact} setSelectedContactId={setSelectedContactId} />
				</tbody>
			</table>

			<button onClick={() => {setSelectedContactId(null)}}>Return</button>
		</>
	)
}
