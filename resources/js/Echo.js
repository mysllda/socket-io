import Vue from 'vue'

window.Echo.channel('laravel_database_post-created')
            .listen('PostCreated', (e) => {
                console.log(e)
                console.log(e.post)

                Vue.$vToastify.success(`Titulo do Post ${e.post.title}`, 'Novo Post')
            })