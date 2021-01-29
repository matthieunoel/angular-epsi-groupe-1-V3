import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { TagInterface } from 'src/app/core/interfaces/tag.interface';
import { TagAdminService } from 'src/app/core/services/tagAdmin.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  private tagsList: TagInterface[];
  // displayedColumns: string[] = ['id', 'name', 'type', 'iteration', 'created', 'delete'];
  public displayedColumns: string[] = ['name', 'iteration', 'delete'];

  public displayedTags: MatTableDataSource<TagInterface>;

  constructor(
    private tagService: TagAdminService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {

    this.initTagsList();

  }

  public async search(event: any) {
    const input = event.target.value;
    // console.log('src input :', input);

    const tempTagsList = [];
    this.tagsList.forEach(tag => {
      if (tag.name.includes(input)) {
        tempTagsList.push(tag);
      }
    });

    this.displayedTags.data = tempTagsList;

  }

  public async delete(id: number) {

    let snackBarRef = this.snackBar.open('Vous allez supprimer un tag. Êtes vous certains ?', 'Confirmer', {
      duration: 10000
    });

    snackBarRef.onAction().subscribe(() => {
      this.tagService.delete(id).subscribe((res:any) => {
        // console.log('delete response :', res);
        this.initTagsList();
      });
    });

  }

  private initTagsList() {

    this.tagService.get().subscribe((res:any[]) => {
      let tempTagsList = [];
      res.forEach(resTag => {
        tempTagsList.push({
          id: resTag.id,
          name: resTag.name,
          type: resTag.type,
          iteration: resTag.iteration,
          created: new Date(resTag.created.toString())
        });
      });
      tempTagsList = tempTagsList.sort((a, b) => {
        return - (a.iteration - b.iteration);
      });
      // console.log('tags :', tempTagsList);
      this.tagsList = tempTagsList;
      this.displayedTags = new MatTableDataSource(tempTagsList);
      this.displayedTags.sort = this.sort;
      this.displayedTags.paginator = this.paginator;
    });
  }

}
