import React from 'react'
import { TextField, Card, CardContent, CardActions, Button, Typography, Checkbox } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

export const TodoListForm = ({ todos, list, callback }) => {

  const checkCompleted = () => {
    return todos.every(todo => todo.completed === true)
  }

  return (
    <Card sx={{ margin: '0 1rem' }}>
      <CardContent>
        <Typography component='h2'>{list.title} {checkCompleted() ? <span>Alla punkter avklarade, bra jobbat!</span> : null }</Typography>
        {todos.map((todo, index) => {
          return (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
              <Typography sx={{ margin: '8px' }} variant='h6'>
                {index + 1}
              </Typography>
              <TextField
                sx={{ flexGrow: 1,  }}
                label='What to do?'
                value={todo.title}
                onChange={(event) => {
                  callback('update', todo.id, { title: event.target.value, completed: todo.completed })
                }}
              />
              <Checkbox label={"Completed"} checked={todo.completed} onChange={(event) => callback('changeCompleted', todo.id, { title: todo.title, completed: event.target.checked })} />
              <Button
                sx={{ margin: '8px' }}
                size='small'
                color='secondary'
                onClick={() => {
                  callback('delete', todo.id)
                }}
              >
                <DeleteIcon />
              </Button>
            </div>
          )
        })}
        <CardActions>
          <Button
            type='button'
            color='primary'
            onClick={() => callback('add')}
          >
            Add Todo <AddIcon />
          </Button>
        </CardActions>

      </CardContent>
    </Card>
  )
}
