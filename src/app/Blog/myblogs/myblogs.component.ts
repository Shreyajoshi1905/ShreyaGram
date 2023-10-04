import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { blogAddService } from 'src/app/Services/blogs.sevice';
import { ConfirmationDialogueBoxService } from 'src/app/Services/confirmation-dialogue-box.service';
import { UserAuthService } from 'src/app/Services/user-auth-service';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MyblogsComponent implements OnInit {
  username!: string | null;
  data!: any;
  blogArray!: Array<any>;

  constructor(
    private blogservice: blogAddService,
    private userauth: UserAuthService,
    private router: Router,
    private confirmationService: ConfirmationDialogueBoxService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.username = this.userauth.getLoggedInUserName();
    this.blogservice.GetBlogByUserName(this.username).subscribe((res) => {
    this.data = res;
    this.blogArray = this.data.data;
    });
  }
  deleteBlog(blogId: number) {
    const dialogRef = this.confirmationService.openConfirmationDialog();
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.blogservice.DeleteBlogById(blogId).subscribe((res) => {
          if (res == 'blog deleted successfully') {
            this.router.navigate(['/addblogs']);
            this.cd.detectChanges();
          }
        });
      }
    });
  }
}
