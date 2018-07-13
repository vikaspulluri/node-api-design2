import { addNewContact, getContacts, getContactById,updateContact,delectContact } from '../controllers/crmController';

const routes = (app) => {
	app.route('/contact')
		.get(getContacts)
		.post(addNewContact);
	app.route('/contact/:contactId')
		.get(getContactById)
		.put(updateContact)
		.delete(delectContact);
}

export default routes;