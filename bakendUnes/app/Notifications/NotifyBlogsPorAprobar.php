<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Models\Blog;
use App\Models\Categorie;
class NotifyBlogsPorAprobar extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    private $date;

    public function __construct(Blog $blog,$date)
    {
        $this->blog = $blog;
        $this->date = $date;

    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
       return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('The introduction to the notification.')
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        $perfil=auth()->user()->load('Perfil');

        $catename= Categorie::findOrFail($this->blog->categorie_id);
        return [
        'id'=>    $this->blog->id,
        'blogtitulo'=>    $this->blog->blogtitulo,
        'blogdescripcion'=>  $this->blog->blogdescripcion,
        'blogcontenido'=>  $this->blog->blogcontenido,
        'categorie_id'=> $catename->categorianame,
        'perfil'=>  $perfil->perfil->usedFirstName." ".$perfil->perfil->usedLastName,
        'perfilid'=>  $perfil->perfil->id,
        'user'=> auth()->user()->name,
        'date'=> $this->date
        ];
    }
}
