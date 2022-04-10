/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
//import TasksController from 'App/Controllers/Http/TasksController'

// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// })

// Route.get('/','PagesController.home')

// Route.get('/about/:name?', 'PagesController.about').as('about')

// Route.get('/contact', 'PagesController.contact').as('contact')

Route.group(() => {
  Route.get('/','TasksController.index')
  Route.post('/tasks','TasksController.store')
  Route.patch('/tasks/:id','TasksController.update')
  Route.delete('/tasks/:id','TasksController.destroy')
}).middleware('auth')

Route.group(() => {
  Route.get('/register','AuthController.showRegister')
  Route.get('/login','AuthController.showLogin')
}).middleware('guest')

Route.post('/register','AuthController.register')
Route.post('/logout','AuthController.logout')
Route.post('/login','AuthController.login')