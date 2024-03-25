import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter(t => t.isActive);

    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
    console.log(this.tabs);
    // throw new Error('Method not implemented.');
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(t => { 
      t.isActive = false;
    });

    tab.isActive = true;
    return true;
  }

}
