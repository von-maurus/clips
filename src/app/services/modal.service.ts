import { Injectable } from '@angular/core';


interface IModal {
  id: string,
  visible: boolean
}

/**
 * This decorator is for making an injectable service
 */
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() { }

  register(id: string) {
    this.modals.push({ id, visible: false });
  }

  unregister(id: string) {
    this.modals = this.modals.filter(m => m.id !== id);
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find(m => m.id === id)?.visible;
  }

  toggleModal(id: string): void {
    const index = this.modals.findIndex(m => m.id === id);
    this.modals[index].visible = !this.modals[index].visible;
  }
}
