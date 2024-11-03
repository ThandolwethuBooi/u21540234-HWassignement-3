using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PagedList;
using PagedList.Mvc;
namespace u21540234_HWassignement_3.Models
{
    public class ReportsViewModel
    {
        public IPagedList<borrow> borrows { get; set; }
    }
}