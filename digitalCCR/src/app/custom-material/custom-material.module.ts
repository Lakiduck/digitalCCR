import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatButtonModule, MatProgressSpinnerModule, MatCardModule, MatSidenavModule, MatGridListModule, MatMenuModule, MatIconModule, MatSnackBarModule, MatProgressBarModule, MatToolbarModule } from '@angular/material'


@NgModule({
    imports: [
        CommonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSidenavModule,
        MatGridListModule, 
        MatMenuModule, 
        MatIconModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatToolbarModule
      ],
      exports: [
        CommonModule, 
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSidenavModule,
        MatGridListModule, 
        MatMenuModule, 
        MatIconModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatToolbarModule
      ],
  declarations: []
})
export class CustomMaterialModule { }
