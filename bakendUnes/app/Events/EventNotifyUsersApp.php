<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class EventNotifyUsersApp  implements  ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    

    /**
     * @var array
     */
    public $NotifyInfo;
    private $TipeNotify;
    private $to_id;
    /**
     * 
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($NotifyInfo,$TipeNotify,$to_id)
    {
        $this->NotifyInfo = $NotifyInfo;
        $this->TipeNotify= $TipeNotify;
        $this->to_id= $to_id;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {

     return new Channel("channel-NotifyAppUser.{$this->TipeNotify}.{$this->to_id}");

    }
}
