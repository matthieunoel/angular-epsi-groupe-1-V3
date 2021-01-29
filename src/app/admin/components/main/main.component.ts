import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
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
    private snackBar: MatSnackBar,
    private router: Router
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

  public add() {
    this.router.navigate(['/admin/createTag']);
  }

  public async delete(id: number) {

    const snackBarRef = this.snackBar.open('Vous allez supprimer un tag. Êtes vous certains ?', 'Confirmer', {
      duration: 10000
    });

    snackBarRef.onAction().subscribe(() => {
      this.tagService.delete(id).subscribe(async (res:any) => {
        // console.log('delete response :', res);
        this.displayedTags.data = await this.getTagsList();
      });
    });

  }

  private async initTagsList() {
      this.displayedTags = new MatTableDataSource(await this.getTagsList());
      this.displayedTags.sort = this.sort;
      this.displayedTags.paginator = this.paginator;
  }

  private getTagsList(): Promise<TagInterface[]> {
    return new Promise((resolve, reject) => {

      this.tagService.get().subscribe((res:any[]) => {
        let tagsList = [];
        res.forEach(resTag => {
          tagsList.push({
            id: resTag.id,
            name: resTag.name,
            type: resTag.type,
            iteration: resTag.iteration,
            created: new Date(resTag.created.toString())
          });
        });
        tagsList = tagsList.sort((a, b) => {
          return - (a.iteration - b.iteration);
        });
        // console.log('tags :', tagsList);
        resolve(tagsList);
      });

    });
  }

}
