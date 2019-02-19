const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    CLOSED:  Symbol("closed"),
    INSIDE: Symbol("inside"),
    HOME: Symbol("home"),
    LISTEN: Symbol("listen"),
    NEXT: Symbol("next"),
    ANYONE: Symbol("anyone"),
    SNEAKED: Symbol("sneaked"),
    SURPRISED: Symbol("surprised"),
    NEIGHBOUR: Symbol("neighbour")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Young boy and his sister left home alone by their parent and instructed not to open door.Do they open the door or remain inside?";
                this.stateCur = GameState.CLOSED;
                break;
            case GameState.CLOSED:
                if(sInput.toLowerCase().match("inside")){
                    sReply = "They heard knock on door. They decided to ignore it, but again they heard 'knock','knock'. Do they remain inside home or will come outside or you  want to discontinue?";
                this.stateCur = GameState.HOME;
                }else if(sInput.toLowerCase().match("discontinue")){
                    sReply ="Read the story again";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "Type inside or discontinue";
                }
                break;
            case GameState.HOME:
                if(sInput.toLowerCase().match("home")){
                    sReply = "Girl couldn't stand it anymore and decided to open the door but the boy reminded her of their mother's warning. If she listen or ignore it?"
                    this.stateCur = GameState.LISTEN;
                }else if(sInput.toLowerCase().match("discontinue")){
                    sReply ="Read the story again";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "Type home to proceed";
                    this.stateCur = GameState.HOME;
                }
                break;
            case GameState.LISTEN:
                if(sInput.toLowerCase().match("listen")){
                    sReply = "No, she wouldn't listen. oh!!..What happen next??";
                    this.stateCur = GameState.NEXT;

                }else if(sInput.toLowerCase().match("discontinue")){
                    sReply ="Read the story again";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "Type listen to proceed";
                }
                break;
                case GameState.NEXT:
                if(sInput.toLowerCase().match("next")){
                    sReply = "She went downstairs. Her brother upstairs heard her asking.. Who is it?? Then he heard silence ...Is there anyone??";
                    this.stateCur = GameState.ANYONE;

                }else if(sInput.toLowerCase().match("discontinue")){
                    sReply ="Read the story again";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "Type next to proceed";
                }
                break;
                case GameState.ANYONE:
                if(sInput.toLowerCase().match("anyone")){
                    sReply = "The boy still dont know. He heard only silence and sister still hadn't returned. Now he decided to sneaked out??";
                    this.stateCur = GameState.SNEAKED;

                }else if(sInput.toLowerCase().match("discontinue")){
                    sReply ="Read the story again";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "Type anyone to proceed";
                }
                break;
                case GameState.SNEAKED:
                if(sInput.toLowerCase().match("sneaked")){
                    sReply = "He sneaked out the back door and made his way to their neighbour house. What happen next??";
                    this.stateCur = GameState.HAPPEN;

                }else if(sInput.toLowerCase().match("discontinue")){
                    sReply ="Read the story again";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "Type sneaked to proceed";
                }
                break;
                case GameState.HAPPEN:
                if(sInput.toLowerCase().match("happen")){
                    sReply = "His neighbour was watching local news channel. Oh Bang!!! What was that?? neighbour surprised!!";
                    this.stateCur = GameState.SURPRISED;

                }else if(sInput.toLowerCase().match("discontinue")){
                    sReply ="Read the story again";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "Type happen to proceed";
                }
                break;
                case GameState.SURPRISED:
                if(sInput.toLowerCase().match("surprised")){
                    sReply = "His neighbour said to the boy ..Hey thats look like yours house.  ";
                    this.stateCur = GameState.NEIGHBOUR;

                }else if(sInput.toLowerCase().match("discontinue")){
                    sReply ="Read the story again";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "Type surprised to proceed";
                }
                break;
                case GameState.NEIGHBOUR:
                if(sInput.toLowerCase().match("neighbour")){
                    sReply = "The boy was shaking with fear and said YES....THE END.  ";
                    this.stateCur = GameState.WELCOMING;

                }else if(sInput.toLowerCase().match("discontinue")){
                    sReply ="Read the story again";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "Type neighbour to proceed";
                }
        }
        return([sReply]);
    }
}