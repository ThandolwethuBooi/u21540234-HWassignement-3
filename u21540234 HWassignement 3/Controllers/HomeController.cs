using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using u21540234_HWassignement_3.Models;
using PagedList;
using PagedList.Mvc;
using System.IO;
using System.Text;
using System.Drawing;

namespace u21540234_HWassignement_3.Controllers
{
    public class HomeController : Controller
    {
        LibraryDBContext db = new LibraryDBContext();
        public async Task<ActionResult> Index(int? pageStudents,int? pageBooks)
        {
            var result = new studbookviewmodel
            {
                students = (await db.students.ToListAsync()).ToPagedList(pageStudents ?? 1, 5),
                books = (await db.books
                .Include (b=> b.type)
                .Include (b=> b.author)
                .ToListAsync()).ToPagedList (pageBooks ?? 1, 5),
                borrows = await db.borrows.ToListAsync()
            };
            return View(result);
        }

        public async Task<ActionResult> Monitor(int? pageBorrows, int? pageAuthors, int? pageTypes)
        {
            var query = new monitorviewmodel
            {
                authors = (await db.authors.ToListAsync()).ToPagedList(pageAuthors ?? 1, 5),
                borrows = (await db.borrows
                .Include (b=> b.student)
                .Include (b=> b.book)
                .ToListAsync()).ToPagedList(pageBorrows ?? 1, 5),
                types = (await db.types.ToListAsync()).ToPagedList(pageTypes ?? 1, 5)
            };

            return View(query);
        }

        public async Task<ActionResult> Report(int? pageBorrows)
        {
            var report = new ReportsViewModel
            {
                borrows = (await db.borrows
                .Include(b => b.student)
                .Include(b => b.book)
                .ToListAsync()).ToPagedList(pageBorrows ?? 1, 5),

            };
           
            

            return View(report);
        }
    }
}