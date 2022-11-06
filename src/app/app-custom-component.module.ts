import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    exports: [
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule
    ]
})

export class CustomComponentsModule {}
