export class InputManager {
    private keys: { [key: string]: boolean } = {};

    constructor() {
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    private onKeyDown(event: KeyboardEvent): void {
        this.keys[event.key.toLowerCase()] = true;
    }

    private onKeyUp(event: KeyboardEvent): void {
        this.keys[event.key.toLowerCase()] = false;
    }

    public isKeyDown(key: string): boolean {
        return this.keys[key.toLowerCase()] || false;
    }
}
