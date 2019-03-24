import { NgModule } from '@angular/core';

import { ExecutivedashboardSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ExecutivedashboardSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ExecutivedashboardSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ExecutivedashboardSharedCommonModule {}
