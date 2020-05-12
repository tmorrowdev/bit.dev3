import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

// Components
import { ButtonComponent } from "./components/button/button.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { DialogFactoryService } from "./services/dialog-factory.service";
import { DialogService } from "./services/dialog.service";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  exports: [DialogComponent, ButtonComponent],
  declarations: [DialogComponent, ButtonComponent],
  providers: [DialogFactoryService, DialogService],
  entryComponents: [DialogComponent]
})
export class DialogModule {}
