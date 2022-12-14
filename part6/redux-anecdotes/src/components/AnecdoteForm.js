import { useDispatch } from 'react-redux'
import { createAnecdote, } from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
	const dispatch = useDispatch()

	const addAnecdote = async (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		dispatch(createAnecdote(content))
		dispatch(setNotification(`you voted ${content}`, 1))
		event.target.anecdote.value = ''
	}
	return (
		<>
			<h2>create new</h2>
			<form onSubmit={addAnecdote}>
				<input name='anecdote' />
				<button type='submit'>add anecdote</button>
			</form>
		</>
	)
}

export default AnecdoteForm
