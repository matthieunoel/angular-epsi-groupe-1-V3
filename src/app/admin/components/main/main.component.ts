import { Component, OnInit } from '@angular/core';
import { TagInterface } from 'src/app/core/interfaces/tag.interface';
import { TagAdminService } from 'src/app/core/services/tagAdmin.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public tags: TagInterface[];
  public displayedTags: TagInterface[];
  // displayedColumns: string[] = ['id', 'name', 'type', 'iteration', 'created'];
  displayedColumns: string[] = ['name', 'iteration'];

  constructor(
    private tagService: TagAdminService
  ) {
    this.tags = [];
  }

  ngOnInit() {

    this.tagService.get().subscribe((res:any[]) => {
      const tempTagsList = [];
      res.forEach(resTag => {
        tempTagsList.push({
          id: resTag.id,
          name: resTag.name,
          type: resTag.type,
          iteration: resTag.iteration,
          created: new Date(resTag.created.toString())
        });
      });
      this.tags = tempTagsList.sort((a, b) => {
        return - (a.iteration - b.iteration);
      });
      console.log('tags :', this.tags);
      this.displayedTags = this.tags;
    });

  }

  public async search(event: any) {
    const input = event.target.value;
    // console.log('src input :', input);

    const tempTagsList = [];
    this.tags.forEach(tag => {
      if (tag.name.includes(input)) {
        tempTagsList.push(tag);
      }
    });

    this.displayedTags = tempTagsList;

  }

}
