import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TagInterface } from 'src/app/core/interfaces/tag.interface';
import { TagAdminService } from 'src/app/core/services/tagAdmin.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public tags: TagInterface[];

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
    });

  }

}

// TP : exo 4

// partie admin ( suite )
// dans la page admin
// afficher un tableau qui récupère les tags https://material.angular.io/components/table/overview
// récupérer les tag avec l'url : https://api.wecolearn.com/api/admin/tags
// afficher les données : nom, importance
// utiliser un input pour filtrer les données ! ;)
