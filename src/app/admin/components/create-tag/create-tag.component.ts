import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { TagAdminService } from 'src/app/core/services/tagAdmin.service';

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.scss']
})
export class CreateTagComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private tagService: TagAdminService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl()
    });
  }

  onSubmit(): void {

    const name = this.form.value.name;

    const snackBarRef = this.snackBar.open(`Vous allez ajouter un tag "${name}". Êtes vous certains ?`, 'Confirmer', {
      duration: 10000
    });

    snackBarRef.onAction().subscribe(() => {
      this.tagService.post(name).subscribe(async (res:any) => {
        console.log('post response :', res);
        this.router.navigate(['/admin/main']);
      });
    });

  }

}
