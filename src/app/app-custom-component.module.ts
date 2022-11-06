import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    exports: [
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatTableModule
    ]
})

export class CustomComponentsModule {}
