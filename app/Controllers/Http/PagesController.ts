import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
    public home ({ view }: HttpContextContract) {
        return view.render('tasks/index') 
    }

    // public about ({ params }: HttpContextContract) {
    //     return params.name ? `This is ${params.name}'s about page` : 'This is about page'
    // }
    
    public about ({ view, params }: HttpContextContract) {
        const name = params.name
        return view.render('about',{name}) 
    }

    public contact ({ view }: HttpContextContract) {
        return view.render('contact') 
    }
}
