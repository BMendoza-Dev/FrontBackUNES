<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NotifyEventBlog implements  ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    

    /**
     * @var array
     */
    public $blog;
    /**
     * 
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($blog,$rol,$to_id)
    {
        $this->blog = $blog;
        $this->rol= $rol;
        $this->to_id= $to_id;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
       // return new PrivateChannel("channel-NotifyBlosAdmin.{$this->response['permission']}");
     return new Channel("channel-NotifyBlosAdmin.{$this->rol}.{$this->to_id}");
      //  return new Channel("channel-NotifyBlosAdmin.admin");
    }
}
